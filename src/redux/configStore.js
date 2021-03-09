import {combineReducers,createStore} from 'redux'
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';

//state tổng của ứng dụng
const rootReducer  = combineReducers({ 
    BaiTapOanTuXiReducer: BaiTapOanTuXiReducer
})

export const store = createStore(rootReducer);