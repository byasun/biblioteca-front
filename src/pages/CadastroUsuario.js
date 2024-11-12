import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CadastroUsuario = () => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      chave: "", // Campo chave, opcional
      senha: "",
      senhaConfirmar: "", // Campo de confirmação de senha
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, "O nome precisa ter no mínimo 3 caracteres")
        .required("Nome é obrigatório"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      chave: Yup.string(), // Chave é opcional
      senha: Yup.string()
        .min(6, "A senha precisa ter no mínimo 6 caracteres")
        .required("Senha é obrigatória"),
      senhaConfirmar: Yup.string()
        .oneOf([Yup.ref('senha'), null], "As senhas não coincidem") // Validação para confirmação de senha
        .required("Confirmação de senha é obrigatória"),
    }),
    onSubmit: (values) => {
      const { senhaConfirmar, ...dadosUsuario } = values;
    
      // Usando a variável de ambiente REACT_APP_API_URL
      const apiUrl = process.env.REACT_APP_API_URL || 'https://biblioteca-comunitaria.azurewebsites.net/api';
    
      // Fazendo a requisição para a API de cadastro
      axios
        .post(`${apiUrl}/usuarios/registrar`, dadosUsuario) // Enviando apenas os dados necessários
        .then((response) => {
          console.log("Usuário cadastrado com sucesso!", response);
          alert("Usuário cadastrado com sucesso!"); // Mensagem de sucesso
          formik.resetForm(); // Limpa o formulário após o cadastro
        })
        .catch((error) => {
          console.error("Erro ao cadastrar o usuário:", error);
          alert("Erro ao cadastrar o usuário: " + (error.response?.data?.error || error.message)); // Mensagem de erro
        });
    }
    ,
  });

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome ? (
            <div className="error">{formik.errors.nome}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="chave">Chave (opcional)</label>
          <input
            type="text"
            id="chave"
            name="chave"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.chave}
          />
          {formik.touched.chave && formik.errors.chave ? (
            <div className="error">{formik.errors.chave}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senha}
          />
          {formik.touched.senha && formik.errors.senha ? (
            <div className="error">{formik.errors.senha}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="senhaConfirmar">Confirmação de Senha</label>
          <input
            type="password"
            id="senhaConfirmar"
            name="senhaConfirmar"
            onChange={ formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senhaConfirmar}
          />
          {formik.touched.senhaConfirmar && formik.errors.senhaConfirmar ? (
            <div className="error">{formik.errors.senhaConfirmar}</div>
          ) : null}
        </div>

        <button type="submit" className="primary-button">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;