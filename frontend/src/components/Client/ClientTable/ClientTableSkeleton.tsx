import React from 'react';
import Badge from 'react-bootstrap/Badge';

export function ClientTableSkeleton({
  cells = 5,
  rows = 4,
}: {
  cells?: number;
  rows?: number;
}) {
  return (
    <tbody>
      {Array.from({ length: rows }).map((item, index) => (
        <tr key={index}>
          {Array.from({ length: cells }).map((item, index) => (
            <td key={index}>
              <Badge bg="secondary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Badge>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
