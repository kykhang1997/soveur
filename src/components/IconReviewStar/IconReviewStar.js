import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './IconReviewStar.module.css';

const IconReviewStar = props => {
  const { className, rootClassName, isFilled } = props;
  const filledOrDefault = isFilled ? css.filled : css.root;
  const classes = classNames(rootClassName || filledOrDefault, className);

  return (
    // <svg

    //   width="23"
    //   height="23"
    //   viewBox="0 0 23 23"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16"
    //     fillRule="evenodd"
    //   />
    //   </svg>
    <svg
      className={classes}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.27549 11.9188L10.4255 13.9188C10.8317 14.175 11.3317 13.7938 11.213 13.325L10.3005 9.73752C10.2758 9.63807 10.2797 9.53369 10.3118 9.43638C10.3439 9.33907 10.4028 9.2528 10.4817 9.18752L13.3067 6.83127C13.6755 6.52502 13.488 5.90627 13.0067 5.87502L9.31924 5.63752C9.21862 5.63166 9.12189 5.59663 9.04087 5.53669C8.95984 5.47675 8.89803 5.39451 8.86299 5.30002L7.48799 1.83752C7.45159 1.73745 7.38528 1.65102 7.29807 1.58994C7.21086 1.52886 7.10696 1.49609 7.00049 1.49609C6.89401 1.49609 6.79012 1.52886 6.7029 1.58994C6.61569 1.65102 6.54938 1.73745 6.51299 1.83752L5.13799 5.30002C5.10294 5.39451 5.04113 5.47675 4.96011 5.53669C4.87908 5.59663 4.78235 5.63166 4.68174 5.63752L0.994236 5.87502C0.512986 5.90627 0.325486 6.52502 0.694236 6.83127L3.51924 9.18752C3.5982 9.2528 3.6571 9.33907 3.68917 9.43638C3.72124 9.53369 3.72516 9.63807 3.70049 9.73752L2.85674 13.0625C2.71299 13.625 3.31299 14.0813 3.79424 13.775L6.72549 11.9188C6.80768 11.8665 6.90308 11.8387 7.00049 11.8387C7.0979 11.8387 7.19329 11.8665 7.27549 11.9188Z"
        fill="#FFD53F"
        stroke="#FFD53F"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

IconReviewStar.defaultProps = { className: null, rootClassName: null, isFilled: false };

const { bool, string } = PropTypes;

IconReviewStar.propTypes = {
  className: string,
  rootClassName: string,
  isFilled: bool,
};

export default IconReviewStar;
