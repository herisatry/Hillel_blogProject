/*
List of articles component
*/

import React from 'react';

import { connect } from 'react-redux';

import Post from '../post/post';

import styles from '../../styles/list.scss';

const Bloglist = ({ postList }) => (
                <div>
                    {
                        postList.map(post => (
                            <Post
                            className={styles.list}
                            key={post.id}
                            id={post.id}
                            text={post.text}
                            title={post.title}
                            author={post.author}
                            />
                        ))
                    }
                </div>
        );

export default connect(myBlogStore => ({ postList: myBlogStore }))(Bloglist);
