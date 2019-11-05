import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Crud({
  model: { type: Role },
  routes: {
    getManyBase: {
      decorators: [UseGuards(AuthGuard('jwt'))],
    },
  },
})
// Decorator for group routes by name in swagger
@ApiUseTags('roles')
// Decorator for send Authorization header in request
@ApiBearerAuth()
@Controller('roles')
export class RoleController {
  constructor(private service: RoleService) {}
}
