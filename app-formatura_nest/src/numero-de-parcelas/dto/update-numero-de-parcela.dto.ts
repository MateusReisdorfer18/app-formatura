import { PartialType } from '@nestjs/mapped-types';
import { CreateNumeroDeParcelaDto } from './create-numero-de-parcela.dto';

export class UpdateNumeroDeParcelaDto extends PartialType(CreateNumeroDeParcelaDto) {}
