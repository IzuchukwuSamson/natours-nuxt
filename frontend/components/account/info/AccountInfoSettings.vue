<template lang="pug">
.user-view__content
  .user-view__form-container
    h2.heading-secondary.ma-bt-md Your account settings
    form.form.form-user-data
      .form__group
        label.form__label(for='name') Name
        input#name.form__input(type='text', value='Jonas Schmedtmann', required)
      .form__group.ma-bt-md
        label.form__label(for='email') Email address
        input#email.form__input(type='email', value='admin@natours.io', required)
      .form__group.form__photo-upload
        img.form__user-photo(src='@/assets/img/users/default.jpg', alt='User photo')
        a.btn-text(href='') Choose new photo
      .form__group.right
        button.btn.btn--small.btn--green Save settings
  .line &nbsp;
  .user-view__form-container
    h2.heading-secondary.ma-bt-md Password change
    form.form.form-user-settings
      .form__group
        label.form__label(for='password-current') Current password
        input#password-current.form__input(type='password', placeholder='••••••••', required, minlength='8')
      .form__group
        label.form__label(for='password') New password
        input#password.form__input(type='password', placeholder='••••••••', required, minlength='8')
      .form__group.ma-bt-lg
        label.form__label(for='password-confirm') Confirm password
        input#password-confirm.form__input(type='password', placeholder='••••••••', required, minlength='8')
      .form__group.right
        button.btn.btn--small.btn--green Save password
</template>
