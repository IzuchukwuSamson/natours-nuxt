<template lang="pug">
main.main
    .login-form
        h2.heading-secondary.ma-bt-lg Log into your account
        form.form
            .form__group
                label.form__label(for='email') Email address
                input#email.form__input(type='email', placeholder='you@example.com', required)
            .form__group.ma-bt-md
                label.form__label(for='password') Password
                input#password.form__input(type='password', placeholder='••••••••', required, minlength='8')
            .form__group
                button.btn.btn--green Login
        div(class="or") ------------- OR ---------------
        div(class="btn-google btn btn-lg")
            img(src="https://img.icons8.com/color/16/000000/google-logo.png") 
            a(class="gLink" href="#") Log In With Google
</template>

<style>
.btn-google {
  color: #545454;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 1px #ddd;
  padding: 10px;
  margin-top: 10px;
}
.gLink {
  text-decoration: none;
  color: gray;
  padding: 1px;
}

.or {
  padding: 12px;
}
</style>
