import React, { Component, useState } from 'react';
import { array, string, func } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureListing } from '../../util/data';
import { richText } from '../../util/richText';
import { findOptionsForSelectFilter } from '../../util/search';
import { createSlug } from '../../util/urlHelpers';
import config from '../../config';
import { NamedLink, ResponsiveImage } from '../../components';
import { types as sdkTypes } from '../../util/sdkLoader';

import IconLocation from './MapPin.svg';
import IconReviewStar from '../IconReviewStar/IconReviewStar';
import IconVectorDown from './Vector.svg';
import IconVectorUp from './Vector.svg';

import css from './ListingCard.module.css';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { connect } from 'react-redux';
import { compose } from 'redux';

const { UUID } = sdkTypes;

const MIN_LENGTH_FOR_LONG_WORDS = 10;

const WEEKDAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: intl.formatMessage(
        { id: 'ListingCard.unsupportedPrice' },
        { currency: price.currency }
      ),
      priceTitle: intl.formatMessage(
        { id: 'ListingCard.unsupportedPriceTitle' },
        { currency: price.currency }
      ),
    };
  }
  return {};
};

const getCategoryInfo = (categoryOptions, key) => {
  return categoryOptions.find(c => c.key === key);
};

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />;
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 });

const findEntry = (availabilityPlan, dayOfWeek) =>
  availabilityPlan?.entries.find(d => d.dayOfWeek === dayOfWeek);

const getEntries = (availabilityPlan, dayOfWeek) =>
  availabilityPlan.entries.filter(d => d.dayOfWeek === dayOfWeek);

const Weekday = props => {
  const { availabilityPlan, dayOfWeek, openEditModal } = props;
  const hasEntry = findEntry(availabilityPlan, dayOfWeek);

  return (
    <div
      className={classNames(css.weekDay, { [css.blockedWeekDay]: !hasEntry })}
      //   onClick={() => openEditModal(true)}
      role="button"
    >
      <div className={css.dayOfWeek}>
        <FormattedMessage id={`EditListingAvailabilityPanel.dayOfWeek.${dayOfWeek}`} />
      </div>
      <div className={css.entries}>
        {availabilityPlan && hasEntry
          ? getEntries(availabilityPlan, dayOfWeek).map(e => {
              return (
                <span className={css.entry} key={`${e.dayOfWeek}${e.startTime}`}>{`${
                  e.startTime
                } - ${e.endTime === '00:00' ? '24:00' : e.endTime}`}</span>
              );
            })
          : null}
      </div>
    </div>
  );
};

export const ListingCardComponent = props => {
  const {
    className,
    rootClassName,
    intl,
    listing,
    renderSizes,
    filtersConfig,
    setActiveListing,
    getListing,
  } = props;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const deListing = ensureListing(getListing(listing.id));

  const { title = '', price, publicData } = currentListing.attributes;
  const slug = createSlug(title);
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;

  const categoryOptions = findOptionsForSelectFilter('category', filtersConfig);
  const category = publicData ? getCategoryInfo(categoryOptions, publicData.category) : null;
  const { formattedPrice, priceTitle } = priceData(price, intl);

  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'ListingCard.perNight'
    : isDaily
    ? 'ListingCard.perDay'
    : 'ListingCard.perUnit';

  //   console.log('listing', currentListing, 'deListing', deListing);

  const [isShowLoadMore, setIsShowLoadMore] = useState(false);

  return (
    <div className={css.custom}>
      <div className={classes}>
        <NamedLink className={css.container} name="ListingPage" params={{ id, slug }}>
          <div
            className={css.threeToTwoWrapper}
            onMouseEnter={() => setActiveListing(currentListing.id)}
            onMouseLeave={() => setActiveListing(null)}
          >
            {/* <img rootClassName={css.rootForImage} alt={title} image={firstImage} /> */}
            <div className={css.aspectWrapper}>
              <LazyImage
                rootClassName={css.rootForImage}
                alt={title}
                image={firstImage}
                variants={['landscape-crop', 'landscape-crop2x']}
                sizes={renderSizes}
              />
            </div>
          </div>
          <div className={css.info}>
            {/* <div className={css.price}>
          <div className={css.priceValue} title={priceTitle}>
            {formattedPrice}
          </div>
          <div className={css.perUnit}>
            <FormattedMessage id={unitTranslationKey} />
          </div>
        </div> */}
            <div className={css.mainInfo}>
              <div className={css.title}>
                {richText(title, {
                  longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                  longWordClass: css.longWord,
                })}
              </div>
              <div className={css.categoryInfo}>
                {/* {category && !category.hideFromListingInfo ? <span>{category.label}</span> : null} */}
                <img src={IconLocation} alt="IconLocation" />
                <span> {currentListing?.attributes?.publicData?.location?.address}</span>
              </div>
              <div className={css.rate}>
                <IconReviewStar isFilled={true} />
                <IconReviewStar isFilled={true} />
                <IconReviewStar isFilled={true} />
                <IconReviewStar isFilled={true} />
                <IconReviewStar isFilled={true} />
                {'  '} (20)
              </div>

              <div className={css.slots}>
                <span>Available slots</span>
                <div className={css.time}>
                  <span>Moring</span>
                  <p className={css.isActive}>8 Oct</p>
                  <p className={css.isActive}>9 Oct</p>
                  <p>10 Oct</p>
                </div>
                <div className={css.time}>
                  <span>Affternoon</span>
                  <p className={css.isActive}>8 Oct</p>
                  <p>9 Oct</p>
                  <p className={css.isActive}>10 Oct</p>
                </div>
                {/* <div className={css.week}>
                  {WEEKDAYS.map(w => (
                    <Weekday
                      dayOfWeek={w}
                      key={w}
                      availabilityPlan={currentListing.availabilityPlan}
                      //   openEditModal={setIsEditPlanModalOpen}
                    />
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </NamedLink>
        <div className={css.line} />
        {isShowLoadMore && (
          <>
            <div className={css.description}>
              <span>Know more about us</span>
              <p>
                Body care is essential for a healthy lifestyle, comfort and well-being . Physical
                appearance, relaxation , hydration, remodeling of the silhouette, elimination of
                toxins are multiple virtues that one obtains by regularly attending a beauty salon.
              </p>
            </div>
            <div className={css.line} />
            <div className={css.moreInfo}>
              <NamedLink className={css.btn} name="ListingPage" params={{ id, slug }}>
                Shop details
              </NamedLink>
            </div>
            <div className={css.line} />
          </>
        )}

        <div className={css.moreInfo} onClick={() => setIsShowLoadMore(!isShowLoadMore)}>
          <p>{isShowLoadMore ? 'See less' : 'More information'} </p>
          <img src={isShowLoadMore ? IconVectorUp : IconVectorDown} alt="IconVector" />
        </div>
      </div>
    </div>
  );
};

ListingCardComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  filtersConfig: config.custom.filters,
  setActiveListing: () => null,
};

ListingCardComponent.propTypes = {
  className: string,
  rootClassName: string,
  filtersConfig: array,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

const mapStateToProps = state => {
  //   console.log('-----state', state);
  const getListing = id => {
    // console.log(id);
    const ref = { id, type: 'listing' };
    const listings = getMarketplaceEntities(state, [ref]);
    return listings.length === 1 ? listings[0] : null;
  };

  return {
    getListing,
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchTimeSlots: (listingId, start, end, timeZone) =>
    dispatch(fetchTimeSlots(listingId, start, end, timeZone)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(ListingCardComponent);

// export default injectIntl(ListingCardComponent);
