import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { PageContentContainer, PageTitleDescription } from "../../components";

import "./index.scss";

export default () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberUser: false,
  });

  const handleChange = (evt) => {
    if (evt.target.type === "checkbox") {
      setFormData((formData) => ({
        ...formData,
        [evt.target.name]: evt.target.checked,
      }));
    } else
      setFormData((formData) => ({
        ...formData,
        [evt.target.name]: evt.target.value,
      }));
  };

  return (
    <>
      <PageTitleDescription
        title="Moj Akaunt"
        bgColor="#a81d84"
        titleColor="#FFF"
      />

      <PageContentContainer>
        <Form id="account-page-container">
          <h2>Prijava</h2>
          <Form.Group
            className="mb-3 account-page-input-container"
            controlId="formBasicEmail"
          >
            <Form.Label>Email adresa ili korisnicko ime</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="account-page-input"
            />
          </Form.Group>
          <Form.Group
            className="mb-3  account-page-input-container"
            controlId="formBasicPassword"
          >
            <Form.Label>Šifra </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="account-page-input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="rememberUser"
              checked={formData.rememberUser}
              onChange={handleChange}
              className="account-page-checked"
              label="Zapamti me"
            />
          </Form.Group>
          <Button className="submit-btn" type="submit">
            Prijava
          </Button>
        </Form>
      </PageContentContainer>
    </>
  );
};
