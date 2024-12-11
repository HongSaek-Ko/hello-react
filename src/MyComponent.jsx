const MyComponent = (props) => {
  const { asdf, children } = props // 비구조 할당
  return (
    <div>
      MyComponent asdf: {asdf || '공란 '}
      children: {children}
    </div>
  )
}
export default MyComponent
