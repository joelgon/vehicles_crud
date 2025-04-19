import { Type } from '@nestjs/common';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class PaginationMeta {
  @ApiProperty({ example: 10, description: 'Number of items on the current page' })
  itemCount: number;

  @ApiProperty({ example: 20, description: 'Total number of items available' })
  totalItems: number;

  @ApiProperty({ example: 10, description: 'Number of items per page' })
  itemsPerPage: number;

  @ApiProperty({ example: 5, description: 'Total number of pages' })
  totalPages: number;

  @ApiProperty({ example: 2, description: 'Current page number' })
  currentPage: number;
}

export class PaginationLinks {
  @ApiProperty({ example: 'http://cats.com/cats?limit=10', description: 'Link to the first page' })
  first: string;

  @ApiProperty({ example: 'http://cats.com/cats?page=1&limit=10', description: 'Link to the previous page' })
  previous: string;

  @ApiProperty({ example: 'http://cats.com/cats?page=3&limit=10', description: 'Link to the next page' })
  next: string;

  @ApiProperty({ example: 'http://cats.com/cats?page=5&limit=10', description: 'Link to the last page' })
  last: string;
}

export const paginatedResponse = <TModel extends object>(model: Type<TModel>) => ({
  properties: {
    items: {
      type: 'array',
      items: { $ref: getSchemaPath(model) },
    },
    meta: { $ref: getSchemaPath(PaginationMeta) },
    links: { $ref: getSchemaPath(PaginationLinks) },
  },
});
