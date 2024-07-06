import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioLoginDto } from './dto/usuario-login.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(":usuario_id/recibo")
  findAllRecibos(@Param("usuario_id") usuario_id: string) {
    return this.usuarioService.findAllRecibos(usuario_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Post("/login")
  findByLoginAndSenha(@Body() usuarioLogin: UsuarioLoginDto) {
    return this.usuarioService.findByLoginAndSenha(usuarioLogin);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Patch(':id/senha')
  updateSenha(@Param('id') id: string, @Body('senha') senha: string) {
    return this.usuarioService.updateSenha(id, senha);
  }

  @Patch(':id/fechar')
  closeConta(@Param('id') id: string) {
    return this.usuarioService.closeConta(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}
