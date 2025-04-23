import React from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ServiceFields, ServiceProps, Default as Service } from 'src/atoms/services/Service';

interface ServicesTeaserFields {
  Services: Array<Services>;
}

interface Services {
  fields: ServiceFields;
}

interface ServicesTeaserProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ServicesTeaserFields;
}

export const Default = (props: ServicesTeaserProps): JSX.Element => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          {props.fields.Services.map((service, i) => {
            const serviceProps: ServiceProps = {
              params: props.params,
              fields: service.fields,
            };
            return <Service key={i} {...serviceProps} />;
          })}
        </div>
      </div>
    </section>
  );
};
