import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'For the military',
    Svg: require('@site/static/img/army-badge.svg').default,
    description: (
      <>
        The bane mask is strong, dependable, and lightweight. Modularized technology allows for easy advances.
      </>
    ),
  },
  {
    title: 'For the Travelers',
    Svg: require('@site/static/img/traveler.svg').default,
    description: (
      <>
        Lets you seamlessly translate in any dialect.
      </>
    ),
  },
  {
    title: 'For the Deaf',
    Svg: require('@site/static/img/deaf.svg').default,
    description: (
      <>
        ASL translation to aid the understanding of those in the deaf community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
