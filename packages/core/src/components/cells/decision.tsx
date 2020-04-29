/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CellProps } from '../../model';
import Label from '../../utils/styles/cells';

const DecisionCell = ({ label, scale = 1 }: CellProps): JSX.Element => {
  const width = 48 * scale;
  const height = 30 * scale;
  return (
    <div>
      <svg
        css={css`
          width: ${width}px;
          height: ${height}px;
        `}
      >
        <polygon
          css={css`
            fill: #fef0dd;
            stroke: #fccd8e;
          `}
          points={`${1 * scale},${15 * scale} ${24 * scale},${29 * scale} ${47 * scale},${
            15 * scale
          } ${24 * scale},${1 * scale}`}
          strokeWidth="2"
        />
      </svg>
      {label && <Label>{label}</Label>}
    </div>
  );
};

export default DecisionCell;