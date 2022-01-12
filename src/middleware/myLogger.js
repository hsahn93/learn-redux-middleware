const myLogger = store => next => action => {
  console.log(action)//액션출력
  const result = next(action) // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달함.
  
  //업데이트 이후의 상태를 조회함.
  console.log('\t', store.getState())
  
  
  return result //여기에서 반환하는 값은 dispatch(action) 의 결과


}

export default myLogger