import React from 'react';
import { ComponentParams, Field, Text as JssText, NextImage as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';


export interface ServiceFields {
    Heading:Field<string>;
    Description:Field<string>;
    Image:ImageField;
}

export type ServiceProps = {  
  params: ComponentParams;
  fields: ServiceFields;
}

export const Default = (props: ServiceProps): JSX.Element => {

  return (    
      <div className="col-lg-4">
        <div className="icon-box">
            <JssImage field={props.fields.Image} />
        </div>  
        <h4><JssText field={props.fields.Heading}/></h4> 
        <p><JssText field={props.fields.Description}/></p>     
      </div>
  );
};
