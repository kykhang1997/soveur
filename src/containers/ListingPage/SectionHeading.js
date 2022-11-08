import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';

import css from './ListingPage.module.css';

const getCategoryInfo = (categoryOptions, key) => {
  return categoryOptions.find(c => c.key === key);
};

const SectionHeading = props => {
  const { richTitle, listingCategory, categoryOptions, showContactUser, onContactUser } = props;

  const category = getCategoryInfo(categoryOptions, listingCategory);
  const showCategory = category && !category.hideFromListingInfo;
  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          {showCategory ? <span>{category.label}</span> : null}
          {showContactUser ? (
            <span className={css.contactWrapper}>
              {showCategory ? <span className={css.separator}>•</span> : null}
              <InlineTextButton
                rootClassName={css.contactLink}
                onClick={onContactUser}
                enforcePagePreloadFor="SignupPage"
              >
                <FormattedMessage id="ListingPage.contactUser" />
              </InlineTextButton>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
