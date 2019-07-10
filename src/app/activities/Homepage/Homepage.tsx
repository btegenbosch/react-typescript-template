import * as React from 'react';

type HomepageProps = {
  classNames: any;
  image: string;
};

export default function Homepage(props: HomepageProps) {
  return (
    <div className={props.classNames.homepage}>
      <h3>Homepage</h3>
      <p>Works.</p>
      <div>
        <img src={props.image} />
      </div>
    </div>
  );
}
