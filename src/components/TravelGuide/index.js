import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {LoaderContainer, MainContainer, PackagesList, Title} from './style'
import PackageItem from '../PackageItem'

console.log('KSD')

class TravelGuide extends Component {
  state = {packages: [], responseStatus: true}

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()

    if (response.ok) {
      this.setState({responseStatus: false})
      const modifiedData = data.packages.map(item => ({
        id: item.id,
        name: item.name,
        imageUrl: item.image_url,
        description: item.description,
      }))
      this.setState({packages: modifiedData})
      //   console.log(data)
    } else {
      console.log(data.error_msg)
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderTravelPackage = () => {
    const {responseStatus, packages} = this.state

    return (
      <MainContainer>
        <Title>Travel Guide</Title>
        {responseStatus ? (
          this.renderLoadingView()
        ) : (
          <PackagesList>
            {packages.map(item => (
              <PackageItem key={item.id} packageData={item} />
            ))}
          </PackagesList>
        )}
      </MainContainer>
    )
  }

  render() {
    return <>{this.renderTravelPackage()}</>
  }
}

export default TravelGuide
