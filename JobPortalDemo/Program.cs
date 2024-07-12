using JobPortalDemo.Data;
using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

var policyName = "CorsPolicy";

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))

    };

});
builder.Services.AddCors(options =>
{

    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:6140")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
});
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<IUser,UserRepository> ();
builder.Services.AddScoped<IRole,RoleRepository> ();
builder.Services.AddScoped<IUserRole,UserRoleRepository> ();
builder.Services.AddScoped<ICompanyAccount,CompanyAccountRepository> ();
builder.Services.AddScoped<ICompanyPassword,CompanyPasswordRepository> ();
builder.Services.AddScoped<IJobSeekerAccount,JobSeekerAccountRepository> ();
builder.Services.AddScoped<IJobSeekerPassword,JobSeekerPasswordRepository> ();
builder.Services.AddScoped<IPostedJob,PostedJobRepository>();
builder.Services.AddScoped<IPostNewJob,PostNewJobRepository>();
builder.Services.AddScoped<IJobSeekerReport,JobSeekerReportRepository> ();
builder.Services.AddScoped<ICompanyReport,CompanyReportRepository> ();
builder.Services.AddScoped<IFeedBackReport,FeedBackReportRepository> ();
builder.Services.AddScoped<IContact,ContactRepository> ();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseAuthentication();

app.UseRouting();

app.UseCors();

app.Run();
