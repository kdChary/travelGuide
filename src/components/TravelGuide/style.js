import styled from 'styled-components'

// Styling Container Components...
export const LoaderContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef4f7;
`

// Styling List component...
export const PackagesList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  width: 90%;
  flex-wrap: wrap;
  overflow: auto;
  scroll-behavior: smooth;
`

// Styling Title...
export const Title = styled.h1`
  font-family: 'Roboto';
  line-height: 1.5;
  color: #334155;
  text-decoration: underline 2px #52bbf0;
`
