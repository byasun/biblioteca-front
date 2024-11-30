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
        "A chave deve conter apenas letras e números",
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
            `Usuário cadastrado com sucesso! ID do usuário: ${response.id}`,
          );
        } else {
          alert("Usuário cadastrado com sucesso!");
        }
        formik.resetForm();
      } catch (error) {
        alert(
          "Erro ao cadastrar o usuário: " +
            (error.message || "Erro desconhecido"),
        );
      }
    },
  });

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={formik.handleSubmit} className="form-container">
        {/* Inputs */}
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
