import React from 'react';
import Form from 'react-bootstrap/Form';

export function ClientSearch({ setSearchString }) {
  function onChange(e) {
    setSearchString(e.target.value);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="search"
          placeholder="Search clients"
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
}
