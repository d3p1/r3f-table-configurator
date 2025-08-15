/**
 * @description Environment
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Environment, useEnvironment} from '@react-three/drei'

export const Env = () => {
  const env = useEnvironment({
    files:
      'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr',
  })

  return (
    <>
      <Environment map={env} background={false} environmentIntensity={3} />
    </>
  )
}
