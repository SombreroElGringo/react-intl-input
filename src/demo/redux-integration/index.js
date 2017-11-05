import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReduxForm from './form';
import Link from './../external-link';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
];

export const values = {
  title: {
    en: 'Harry Potter the sorcer',
    fr: 'Harry Potter le sorcier',
  },
  description: {
    en: 'A magic book',
    fr: 'Un livre magique',
  },
}

class ReduxFormIntegration extends Component {

  handleSubmit = (values) => {
    console.log('SUBMIT VALUES', values);
  }

  render() {
    return (
      <section>
        <Row>
          <Col md={8}>
            <h2>Redux from integration</h2>
            <p>
              Integration with <Link href="https://redux-form.com/7.1.2/">redux-form</Link> is straightforward, just use <code>ReduxFormIntlInput</code> as the component prop of redux-form <code>Field</code> component.
            </p>
            <p>
              If you need to handle more complex input component, like displaying validation errors or anything, use <code>ReduxFormIntlInput</code> inside your own component and <strong>make sure to pass the redux-form <code>input</code> prop to the wrapped component.</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ReduxForm
              langs={langs}
              onSubmit={this.handleSubmit}
              initialValues={values}
            />
          </Col>
        </Row>


      </section>
    );
  }

}

export default ReduxFormIntegration;