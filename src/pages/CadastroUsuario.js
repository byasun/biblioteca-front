import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CadastroUsuario = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      senha: "",
      confirmacaoSenha: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, "O nome precisa ter no mínimo 3 caracteres")
        .required("Nome é obrigatório"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      senha: Yup.string()
        .min(6, "A senha precisa ter no mínimo 6 caracteres")
        .required("Senha é obrigatória"),
      confirmacaoSenha: Yup.string()
        .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
        .required("Confirmação de senha é obrigatória"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post("https://sua-api.com/cadastrar", values)
        .then((response) => {
          console.log("Usuário cadastrado com sucesso!", response);
          alert("Cadastro realizado com sucesso!");
          // Redirecionar ou limpar campos
        })
        .catch((error) => {
          console.error("Erro ao cadastrar o usuário:", error);
          setErrorMessage(error.response ? error.response.data.message : "Erro desconhecido");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
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
          <label htmlFor="confirmacaoSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmacaoSenha"
            name="confirmacaoSenha"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmacaoSenha}
          />
          {formik.touched.confirmacaoSenha && formik.errors.confirmacaoSenha ? (
            <div className="error">{formik.errors.confirmacaoSenha}</div>
          ) : null}
        </div>

        <button type="submit" className="primary-button" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
