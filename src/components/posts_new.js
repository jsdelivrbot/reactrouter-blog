import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values) {
    // Object for tracking errors
    const errors = {}

    // Validate input
    if(!values.title) {
        errors.title = "Title field is empty!"
    }

    if(!values.categories) {
        errors.categories = "Please enter at least 1 category"
    }

    if(!values.content) {
        errors.content = "Content field is empty!"
    }

    // If empty, form submits
    // If not empty, form does not submit
    return errors
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew)
