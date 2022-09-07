export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const passwordRegex = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{6,}$/

export const MENU_TYPES = {
  exposed: 'EXPOSED_MENU',
  admin: 'ADMIN_MENU',
  user: 'USER_MENU',
  dynamic: "DYNAMIC"
}
