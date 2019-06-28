/* eslint-disable no-shadow */
/*
Form component
*/

import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { addPost, updatePost } from '../../actions/formActions';
import Icon from '../ui/Icon/icon';
import styles from '../../styles/form.scss';

class Blogform extends PureComponent {
    constructor(props) {
        super(props);
        const { defaultAuthor, defaultText, defaultTitle } = this.props;
        this.state = {
            text: defaultText || '',
            title: defaultTitle || '',
            author: defaultAuthor || '',
        };

        this.textChange = this.textChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    textChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name] : e ? value : '',
        });
    }

    submitForm(e) {
        e.preventDefault();

        const { text, title, author } = this.state;
        const {
 defaultId, handleAction, addPost, updatePost,
} = this.props;

        if (text) {
            const post = {
                id: defaultId || Date.now(),
                text,
                title,
                author,
            };
            if (handleAction === 'changeIt') {
                updatePost(post);
            } else {
                addPost(post);
            }
        }
    }

    render() {
        const { text, title, author } = this.state;
        return (
            <form onSubmit={this.submitForm} className={styles.form}>
                <input
                type="text"
                value={author}
                name="author"
                onChange={this.textChange}
                placeholder="Author goes here..."
                />
                <input
                type="text"
                value={title}
                name="title"
                onChange={this.textChange}
                placeholder="Title goes here..."
                />
                <textarea
                placeholder="Write something here..."
                name="text"
                value={text}
                onChange={this.textChange}
                />
                <button className={styles.button} type="submit">Publish <Icon name="upload" /></button>
            </form>
        );
    }
}

export default connect(null, { addPost, updatePost })(Blogform);
// no state so the first argument is null.
