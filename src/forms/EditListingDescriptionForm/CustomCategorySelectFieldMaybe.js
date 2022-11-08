import React, { useState } from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.module.css';

const CustomCategorySelectFieldMaybe = props => {
  const { name, id, categoryOptions, intl, onChange } = props;

  const categoryLabel = intl.formatMessage({
    id: `EditListingDescriptionForm.${id}Label`,
  });

  return categoryOptions ? (
    <>
      <FieldSelect
        className={css.category}
        name={name}
        id={id}
        label={categoryLabel}
        onChange={onChange}
      >
        {categoryOptions.map(c => (
          <option key={c.key} value={c.key}>
            {c.label}
          </option>
        ))}
      </FieldSelect>
    </>
  ) : null;
};

export default CustomCategorySelectFieldMaybe;
