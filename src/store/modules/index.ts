import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { UserInfoShape } from '@src/interface/user-info'
import { HYDRATE } from 'next-redux-wrapper'

import auth from './auth'
import modal, { ModalShape } from './modal'

const reducer = (
  state: CombinedState<{ auth: UserInfoShape; modal: ModalShape }>,
  action: AnyAction
) => {
  // connect ssr with csr
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return combineReducers({
    auth,
    modal,
    // 여기에 추가
  })(state, action)
}

export default reducer
