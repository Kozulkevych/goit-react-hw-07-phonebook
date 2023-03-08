import styled from 'styled-components';

export const LabelFilter = styled.label`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  
`;
export const InputFilter = styled.input`
  display: flex;
  width: 470px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
`;
