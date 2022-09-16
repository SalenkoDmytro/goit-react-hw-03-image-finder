import { MagnifyingGlass } from 'react-loader-spinner';

export default function Loader() {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        position: 'fixed',
        bottom: '0%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '100',
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#303f9f;"
    />
  );
}
