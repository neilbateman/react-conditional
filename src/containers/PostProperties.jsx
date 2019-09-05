import React from 'react';
import PropTypes from 'prop-types';


function PostProperties(props){
    return (
        <div>
            <style jsx> {`

            .post-property-container {
                display: flex;
                margin: 5%;
                flex-direction: row;
                // width: 90%;
            }

            .like-control-container {
            }

            .user-comments {
                // flex-grow: 1;

            }

            `}</style>

            <div className="post-property-container">
                <div className="like-control-container">

                </div>

                <div className="user-comments">
                    <h4>{props.title}</h4>
                    <h5>{props.comment}</h5>
                    <h5>{props.url}</h5>
                </div>
            </div>

        </div>
    );
}

PostProperties.propTypes = {
    title: PropTypes.string,
    comment: PropTypes.string,
    url: PropTypes.string
};

export default PostProperties;
