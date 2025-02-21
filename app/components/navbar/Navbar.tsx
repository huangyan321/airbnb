'use client';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
export default function Navbar() {
  return (
    <div className="w-full fixed bg-white z-10 shadow-sm ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo></Logo>
            <Search></Search>
            <UserMenu></UserMenu>
          </div>
        </Container>
      </div>
    </div>
  );
}
