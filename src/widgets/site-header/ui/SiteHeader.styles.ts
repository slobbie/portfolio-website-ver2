import styled from '@emotion/styled';

export const Header = styled.header`
  position: sticky;
  z-index: 40;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  min-height: 56px;
  border-top: 2px solid var(--text);
  border-bottom: 1px solid var(--line-strong);
  background: rgba(9, 9, 9, 0.92);
  backdrop-filter: blur(18px);

  @media (max-width: 640px) {
    min-height: 52px;
  }
`;

export const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 9px;
  color: var(--text-soft);
  font-size: 0.86rem;
  letter-spacing: -0.01em;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const AvailabilityDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 5px rgba(112, 225, 139, 0.08);
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-self: end;
  gap: 22px;

  a {
    color: var(--text-soft);
    font-size: 0.86rem;
    letter-spacing: -0.01em;
    transition: color 180ms ease;

    &:hover {
      color: var(--text);
    }
  }

  @media (max-width: 640px) {
    gap: 12px;

    a {
      font-size: 0.72rem;
    }
  }
`;
