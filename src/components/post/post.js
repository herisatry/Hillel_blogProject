/* eslint-disable no-shadow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Blogform from '../form/Blogform';
import { removePost } from '../../actions/formActions';
import styles from '../../styles/post.scss';
import Icon from '../ui/Icon/icon';

class Post extends PureComponent {
	constructor(props) {
		super(props);
		const { text, title, author } = this.props;

		this.state = {
			title,
			author,
			text,
			isChanging: false,
		};

		this.handleRemove = this.handleRemove.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { text } = this.props;
		if (nextProps.text !== text) {
			this.setState({
				isChanging: false,
				text: nextProps.text,
				title: nextProps.title,
				author: nextProps.author,
			});
		}
	}

	handleUpdate() {
		const { isChanging } = this.state;
		this.setState({
			isChanging: !isChanging,
		});
	}

	handleRemove() {
		const { id, removePost } = this.props;
		removePost(id);
	}


	render() {
		const {
			isChanging,
			text,
			title,
			author,
			} = this.state;
		const {
			id,
			text: textProps,
			title: titleProps,
			author: authorProps,
} = this.props;
		return (
			<div className={styles.post}>
				{
					isChanging ? (
						<Blogform
						defaultId={id}
						defaultTitle={titleProps}
						defaultAuthor={authorProps}
						defaultText={textProps}
						handleAction="changeIt"
						/>
) : (
	<div>
		<h3>{title}</h3>
		<small>By : {author}</small>
		<hr />
		<p>{text}</p>
	</div>
	)
	}
	<div>
		<button type="button" onClick={this.handleUpdate} className={styles.button}><Icon name="edit" /></button>
		<button type="button" onClick={this.handleRemove} className={styles.button}><Icon name="close" /></button>
	</div>
   </div>
		);
	}
}

export default connect(null, { removePost })(Post);
