import {type PreviewLayoutKey, type SchemaType, useSchema} from 'sanity';
import {Box} from '@sanity/ui';
import type {HotspotTooltipProps} from 'sanity-plugin-hotspot-array';
import {useMemo} from 'react';
import styled from 'styled-components';

interface HotspotFields {
  productWithVariant?: {
    product: {
      _ref: string;
    };
  };
}

const StyledBox = styled(Box)`
  width: 200px;
`;

export default function ProductPreview(props: HotspotTooltipProps<HotspotFields>) {
  const {value, renderPreview} = props;
  const productSchemaType = useSchema().get('product');
  const hasProduct = value?.productWithVariant?.product?._ref && productSchemaType;

  const previewProps = useMemo(
    () => ({
      value: value?.productWithVariant?.product,
      schemaType: productSchemaType as SchemaType,
      layout: 'default' as PreviewLayoutKey,
    }),
    [productSchemaType, value?.productWithVariant?.product],
  );

  return (
    <StyledBox padding={2}>
      {hasProduct && previewProps ? renderPreview(previewProps) : `No product selected`}
    </StyledBox>
  );
}