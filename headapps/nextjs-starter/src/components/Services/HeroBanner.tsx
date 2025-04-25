import React from 'react';
import {
  Text,
  RichText as JssRichText,
  withDatasourceCheck,
  ImageField,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import NextLink from 'next/link';

type DataSource = {
  bannerHeading: Field<string>;
  bannerImage: ImageField;
  bannerDescription: Field<string>;
};

type pageContextItem = {
  pageHeading: Field<string>;
  pageImage: ImageField;
  pageContent: Field<string>;
};

type HeroBannerProps = ComponentProps & {
  fields: {
    data: {
      datasource: DataSource;
      contextItem: pageContextItem;
    };
  };
};

const HeroBannerDefault = (props: HeroBannerProps): JSX.Element => {
  const { datasource, contextItem } = props.fields.data;
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>
          <Text field={datasource.bannerHeading ?? contextItem.pageHeading} />
        </h1>
        <JssRichText field={datasource.bannerDescription ?? contextItem.pageContent} />
        <NextLink href="/">Explore</NextLink>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<HeroBannerProps>(HeroBannerDefault);
