import React from 'react';
import { Icon } from '@rsuite/icons';
import { RxExternalLink } from 'react-icons/rx';

const Info = () => {
  return (
    <>
      <section>
        <h6>Reference</h6>
        <ol>
          <li>
            Bob Donnelly Jr., PhD and Fatma Abdel-Raouf, PhD.{' '}
            <i>Statistics, 3E (Idiot&apos;s Guides)</i>. 3rd ed. Alpha, 2016{' '}
            <a
              href="https://www.dk.com/ca/book/9781465451668-statistics-3e/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon as={RxExternalLink} />
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h6>Stack</h6>
        <ol>
          <li>
            React{' '}
            <a href="https://github.com/facebook/react" target="_blank" rel="noreferrer">
              <Icon as={RxExternalLink} />
            </a>
          </li>
          <li>
            React Suite{' '}
            <a href="https://github.com/rsuite/rsuite" target="_blank" rel="noreferrer">
              <Icon as={RxExternalLink} />
            </a>
          </li>
          <li>
            React Icons{' '}
            <a href="https://github.com/react-icons/react-icons" target="_blank" rel="noreferrer">
              <Icon as={RxExternalLink} />
            </a>
          </li>
          <li>
            ApexCharts{' '}
            <a href="https://github.com/apexcharts/apexcharts.js" target="_blank" rel="noreferrer">
              <Icon as={RxExternalLink} />
            </a>
          </li>
          <li>
            react-csv{' '}
            <a href="https://github.com/react-csv/react-csv" target="_blank" rel="noreferrer">
              <Icon as={RxExternalLink} />
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h6>Issues</h6>
        <p>
          If you find any issues or want to give any suggestion, you can add it{' '}
          <a href="https://github.com/DercilioFontes/stats/issues" target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default Info;
