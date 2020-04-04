import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

class Index {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>NextConnect</title>
        </Head>
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <Navbar {...this.props} />
          <Component pageContext={this.pageContext} {...pageProps} />
        </MuiThemeProvider>
      </Container>
    )
  }
}

export default Index
