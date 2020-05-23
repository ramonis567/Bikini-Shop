import React, { useState } from "react";
import "./CadastroUsuario.css";
import Swal from "sweetalert2";
import {
  InputGroup,
  FormControl,
  Button,
  FormGroup,
  FormCheck,
} from "react-bootstrap";

export function CadastroUsuario(props) {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [cargo, setCargo] = useState("cargo1");

  function handleUname(event) {
    setUname(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePwd(event) {
    setPassword(event.target.value);
  }
  function handlePwd2(event) {
    setPassword2(event.target.value);
  }
  function handleCargo(event) {
    setCargo(event.target.value);
  }

  function handleSubmit() {
    let cond = false;

    console.log(email);
    console.log(email.indexOf("@"));

    if (uname === "") {
      Swal.fire("Erro!", "Submeta um NOME!", "error");
      cond = false;
    } else if (email === "" || email.indexOf("@") === -1) {
      Swal.fire("Erro!", "Submeta um EMAIL!", "error");
      cond = false;
    } else if (password === "") {
      Swal.fire("Erro!", "Submeta uma SENHA!", "error");
      cond = false;
    } else if (password2 === "") {
      Swal.fire("Erro!", "Submeta a CONFIRMAÇÃO DE SENHA", "error");
      cond = false;
    } else {
      if (password !== password2) {
        Swal.fire("Erro!", "Senhas não coincidem", "error");
        cond = false;
      } else {
        cond = true;
        buttomSubmit();
        Swal.fire("Sucesso!", "CADASTRO FEITO COM SUCESSO!", "success");
      }
    }
  }

  function buttomSubmit() {
    var cadastro = {
      username: uname,
      password: password,
      email: email,
      cargo: cargo,
    };
    props.addCadastro(cadastro);
  }
  if (!props.loggedIn) {
    return (
      <div className="not-logged-in-error">
        Você deve estar logado para acessar essa página
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center">
        <form className="formback d-flex flex-column">
          <h1 className="titulo">Cadastro de Usuários</h1>
          <InputGroup className="mb-3">
            <FormControl
              id="nome"
              type="text"
              className="inputuser"
              placeholder="INSIRA O NOME"
              aria-label="INSIRA O NOME"
              aria-describedby="basic-addon1"
              value={uname}
              onChange={handleUname}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              id="email"
              type="email"
              className="inputuser"
              placeholder="INSIRA O EMAIL"
              aria-label="INSIRA O EMAIL"
              aria-describedby="basic-addon1"
              value={email}
              onChange={handleEmail}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              id="senha"
              type="password"
              className="inputuser"
              placeholder="CRIE UMA SENHA"
              aria-label="CRIE UMA SENHA"
              aria-describedby="basic-addon1"
              value={password}
              onChange={handlePwd}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              id="confirm senha"
              type="password"
              className="inputuser"
              placeholder="CONFIRME SUA SENHA"
              aria-label="CONFIRME SUA SENHA"
              aria-describedby="basic-addon1"
              value={password2}
              onChange={handlePwd2}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl as={"select"}
              id="cargo"
              className="inputuser"
              placeholder="SELECIONE O CARGO"
              aria-label="SELECIONE O CARGO"
              aria-describedby="basic-addon1"
              value={cargo}
              onChange={handleCargo}
              required
            >
              <option>CARGO 1</option>
              <option>CARGO 2</option>
              <option>CARGO 3</option>
              </FormControl>
          </InputGroup> 
      
          <div>
            <button className="btn mbtn" onClick={handleSubmit}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
