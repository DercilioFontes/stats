import React from 'react';
import { Icon } from '@rsuite/icons';
import { RxExternalLink } from 'react-icons/rx';

const Info = () => {
  return (
    <>
      <section>
        <h6>References</h6>
        <ol>
          <li>
            Robert A. Donnelly, Jr., Ph.D. and Fatma Abdel-Raouf, Ph.D.{' '}
            <i>Statistics, 3E (Idiot&apos;s Guides)</i>. 3rd ed. Alpha, 2016{' '}
            <a
              href="https://www.dk.com/ca/book/9781465451668-statistics-3e/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon as={RxExternalLink} />
            </a>
          </li>
          <li>
            Wikipedia contributors. (2022, October 4). <i>Histogram</i>. Wikipedia.{' '}
            <a href="https://en.wikipedia.org/wiki/Histogram" target="_blank" rel="noreferrer">
              <Icon as={RxExternalLink} />
            </a>
          </li>
          <li>
            Wikipedia contributors. (2023, February 18). <i>Bar chart</i>. Wikipedia.{' '}
            <a href="https://en.wikipedia.org/wiki/Bar_chart" target="_blank" rel="noreferrer">
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
          If you find any issue or want to give any suggestion, you can add it{' '}
          <a href="https://github.com/DercilioFontes/stats/issues" target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
      </section>
      <section className="license">
        <h6>License</h6>
        <details>
          <summary>MIT</summary>
          <p>
            MIT License{' '}
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">
              <Icon as={RxExternalLink} />
            </a>
          </p>
          <p>Copyright (c) 2022 Dercilio Fontes</p>
          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy of this
            software and associated documentation files (the &ldquo;Software&rdquo;), to deal in the
            Software without restriction, including without limitation the rights to use, copy,
            modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
            to permit persons to whom the Software is furnished to do so, subject to the following
            conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be included in all copies or
            substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
            HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
            CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
            THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </details>
      </section>
    </>
  );
};

export default Info;
