import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { cadastrarUsuario } from "../redux/usuarios/usuarioActions"; // Importando a ação

const CadastroUsuario = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      chave: "",
      senha: "",
      senhaConfirmar: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, "O nome precisa ter no mínimo 3 caracteres")
        .required("Nome é obrigatório"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      chave: Yup.string().matches(
        /^[A-Za-z0-9]*$/,
        "A chave deve conter apenas letras e números"
      ),
      senha: Yup.string()
        .min(6, "A senha precisa ter no mínimo 6 caracteres")
        .required("Senha é obrigatória"),
      senhaConfirmar: Yup.string()
        .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
        .required("Confirmação de senha é obrigatória"),
    }),
    onSubmit: async (values) => {
      const { senhaConfirmar, ...dadosUsuario } = values;

      try {
        const response = await dispatch(cadastrarUsuario(dadosUsuario));
        if (response?.id) {
          alert(
            `Usuário cadastrado com sucesso! ID do usuário: ${response.id}`
          );
        } else {
          alert("Usuário cadastrado com sucesso!");
        }
        formik.resetForm();
      } catch (error) {
        alert(
          "Erro ao cadastrar o usuário: " +
            (error.message || "Erro desconhecido")
        );
      }
    },
  });

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={formik.handleSubmit} className="form-container">
        {/* Campo Nome */}
        <div className="form-field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome && (
            <div className="error">{formik.errors.nome}</div>
          )}
        </div>

        {/* Campo Email */}
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        {/* Campo Chave */}
        <div className="form-field">
          <label htmlFor="chave">Chave</label>
          <input
            id="chave"
            name="chave"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.chave}
          />
          {formik.touched.chave && formik.errors.chave && (
            <div className="error">{formik.errors.chave}</div>
          )}
        </div>

        {/* Campo Senha */}
        <div className="form-field">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            name="senha"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senha}
          />
          {formik.touched.senha && formik.errors.senha && (
            <div className="error">{formik.errors.senha}</div>
          )}
        </div>

        {/* Campo Confirmar Senha */}
        <div className="form-field">
          <label htmlFor="senhaConfirmar">Confirmar Senha</label>
          <input
            id="senhaConfirmar"
            name="senhaConfirmar"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senhaConfirmar}
          />
          {formik.touched.senhaConfirmar && formik.errors.senhaConfirmar && (
            <div className="error">{formik.errors.senhaConfirmar}</div>
          )}
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="primary-button"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
