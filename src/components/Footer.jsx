import styled from 'styled-components'
const Footer = () => {
  return (
      <footer>
          <p>Copyright &copy; 2023</p>
          <SFooter href="/about">About</SFooter>
          
    </footer>
  )
}

const SFooter = styled.a`
    text-decoration:none;
    color:black;
  
  
  &:hover{
    color:red;
    text-decoration: underline;
  }
`

export default Footer