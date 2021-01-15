import { Container } from '@material-ui/core'

import { useRoutes } from './hooks/useRoutes'

export const App = () => {

	const routes = useRoutes()
	
	return <Container maxWidth='sm'>{routes}</Container>
}