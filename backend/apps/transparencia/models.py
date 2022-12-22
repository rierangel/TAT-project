from django.db import models

# Create your models here.

# Articulo 9


class A094_ManualesDeProcedimientos(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/94")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


class A095_EstructuraOrganizativa(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/95")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


class A096_SeguimientoDeDocumentos(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/96")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


class A097_DescripciónDeFormularios(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/97")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


class A098_ReglasDeProcedimiento(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/98")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


# Articulo 10

class A102_EjecucionesPresupuestarias(models.Model):
    titulo = models.CharField(max_length=500)
    pdf = models.FileField(
        upload_to="transparencias/102/pdf", blank=True, null=True)
    cvs = models.FileField(
        upload_to="transparencias/102/cvs", blank=True, null=True)
    xlsx = models.FileField(
        upload_to="transparencias/102/xlsx", blank=True, null=True)

    def __str__(self):
        return self.titulo


class A103_Estadisticas(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/103")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


# Articulo 10
class A112_DesignaciónDeColaboradores(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/103")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


class A113_Planilla(models.Model):
    posicion = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    cedula = models.CharField(max_length=200)
    cargo = models.CharField(max_length=200)
    Salario_Mensual = models.CharField(max_length=200)
    inicio_de_labores = models.DateField()
    objeto_de_gasto = models.CharField(max_length=200)
    Estatus = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre


class A113_PlanillaArchivos(models.Model):
    pdf = models.FileField(upload_to="transparencias/112/pdf")
    cvs = models.FileField(upload_to="transparencias/112/cvs")
    xlsx = models.FileField(upload_to="transparencias/112/xlsx")

    def __str__(self):
        return f'archivos de planilla'


class A114_GastosDeRepresentación(models.Model):
    posicion = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    cedula = models.CharField(max_length=200)
    cargo = models.CharField(max_length=200)
    gastos_de_representación = models.CharField(max_length=200)
    inicio_de_labores = models.DateField()
    objeto_de_gasto = models.CharField(max_length=200)

    def __str__(self):
        return self.cargo


class A114_GastosDeRepresentaciónArchivos(models.Model):
    pdf = models.FileField(upload_to="transparencias/112/pdf")
    cvs = models.FileField(upload_to="transparencias/112/cvs")
    xlsx = models.FileField(upload_to="transparencias/112/xlsx")

    def __str__(self):
        return f'archivos gastos de representacion'


class A115_informesDeViajesNacionales(models.Model):
    titulo = models.CharField(max_length=200, blank=True, null=True)
    cargo = models.CharField(max_length=200, blank=True, null=True)
    destino = models.CharField(max_length=200, blank=True, null=True)
    participación = models.CharField(max_length=200, blank=True, null=True)
    fecha_salida = models.DateField(max_length=200, blank=True, null=True)
    fecha_regreso = models.DateField(max_length=200, blank=True, null=True)
    costo = models.FloatField(blank=True)
    viatico = models.PositiveIntegerField(blank=True)
    informe = models.FileField(
        upload_to="transparencias/115", blank=True, null=True)

    def __str__(self):
        return self.titulo


class A115_informesDeViajesNacionalesResumen(models.Model):
    costo_total = models.FloatField()
    viatico = models.FloatField()
    gran_total = models.FloatField()

    pdf = models.FileField(upload_to="transparencias/115/resumen/pdf")
    cvs = models.FileField(upload_to="transparencias/115/resumen/cvs")
    xlsx = models.FileField(upload_to="transparencias/115/resumen/xlsx")


class A115_informesDeViajesInternacionales(models.Model):
    titulo = models.CharField(max_length=200, blank=True)
    cargo = models.CharField(max_length=200, blank=True)
    destino = models.CharField(max_length=200, blank=True)
    participación = models.CharField(max_length=200, blank=True)
    fecha_salida = models.DateField(max_length=200, blank=True)
    fecha_regreso = models.DateField(max_length=200, blank=True)
    costo = models.FloatField(blank=True)
    viatico = models.PositiveIntegerField(blank=True)
    informe = models.FileField(upload_to="transparencias/115", blank=True)

    @property
    def ver(self):
        return self.informe.url

    def __str__(self):
        return self.titulo


class A115_informesDeViajesInternacionalesResumen(models.Model):
    costo_total = models.FloatField()
    viatico = models.FloatField()
    gran_total = models.FloatField()

    pdf = models.FileField(upload_to="transparencias/115/resumen/pdf")
    cvs = models.FileField(upload_to="transparencias/115/resumen/cvs")
    xlsx = models.FileField(upload_to="transparencias/115/resumen/xlsx")


# Articulo 26

class A261_SolicitudDeInformaciónPresentadaALaInstitución(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/261")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


class A262_AdjuntosDeSolicitudesResueltasYNegadas(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to="transparencias/262")

    @property
    def ver(self):
        return self.archivo.url

    @property
    def descargar(self):
        return self.pk

    def __str__(self):
        return self.titulo


class A263_ParticipaciónCiudadana(models.Model):
    titulo = models.CharField(max_length=500)
    fecha = models.DateField()
    link = models.URLField(blank=True, null=True)

    @property
    def año(self):
        return self.fecha.year

    @property
    def mes(self):
        return self.fecha.month



    def __str__(self):
        return self.titulo
