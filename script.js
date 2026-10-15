/* GitHub Pages edition. Client code is inspectable; see setup guide. */
const QUESTIONS = [
  {
    "id": "M01",
    "type": "mcq",
    "topic": "Project setup",
    "prompt": "Which framework does FinalAPISession target?",
    "options": [
      ".NET Framework 4.8",
      ".NET 6",
      ".NET 8",
      ".NET 9"
    ],
    "answer": 2,
    "why": "The csproj TargetFramework is net8.0."
  },
  {
    "id": "M02",
    "type": "mcq",
    "topic": "Project setup",
    "prompt": "Which EF Core database provider is configured in Program.cs?",
    "options": [
      "SQLite",
      "SQL Server",
      "PostgreSQL",
      "InMemory"
    ],
    "answer": 1,
    "why": "UseSqlServer(connection) registers SQL Server."
  },
  {
    "id": "M03",
    "type": "mcq",
    "topic": "Dependency injection",
    "prompt": "Which service lifetime is used for IGeneric<T> in Program.cs?",
    "options": [
      "Singleton",
      "Transient",
      "Scoped",
      "An instance created using new"
    ],
    "answer": 2,
    "why": "AddScoped registers one instance per request scope by default."
  },
  {
    "id": "M04",
    "type": "mcq",
    "topic": "Dependency injection",
    "prompt": "Why does registering AppDbContext through AddDbContext fit the repositories?",
    "options": [
      "It makes the context a global singleton",
      "It uses a scoped context by default that matches scoped repository usage",
      "It automatically creates the SQL Server database",
      "It disables entity tracking"
    ],
    "answer": 1,
    "why": "AddDbContext is scoped by default; do not inject scoped DbContext into a singleton."
  },
  {
    "id": "M05",
    "type": "mcq",
    "topic": "Routing",
    "prompt": "Which URL matches DoctorController.GetDoctor for doctor ID 12?",
    "options": [
      "GET /api/Doctor/12",
      "GET /Doctor?id=12",
      "POST /api/Doctor/12",
      "GET /api/Doctor/GetDoctor"
    ],
    "answer": 0,
    "why": "The controller has api/[controller] and the action has HttpGet(\"{id}\")."
  },
  {
    "id": "M06",
    "type": "mcq",
    "topic": "Controllers",
    "prompt": "What happens when DoctorController.AddDoctor receives a DepartmentId that does not exist?",
    "options": [
      "It creates a new department",
      "It returns HTTP 404 Not Found",
      "It silently removes DepartmentId",
      "It returns HTTP 201 Created"
    ],
    "answer": 1,
    "why": "The controller calls _department.GetBYID and returns NotFound for null."
  },
  {
    "id": "M07",
    "type": "mcq",
    "topic": "Controllers",
    "prompt": "What HTTP result does PatientController.DeletePatient return if no patient matches the ID?",
    "options": [
      "200 OK",
      "201 Created",
      "404 Not Found",
      "409 Conflict"
    ],
    "answer": 2,
    "why": "The repository returns false when FindAsync does not find a row."
  },
  {
    "id": "M08",
    "type": "mcq",
    "topic": "EF Core loading",
    "prompt": "What related data does PatientRepo.GetAll explicitly eager-load?",
    "options": [
      "Departments only",
      "Device and Doctors",
      "Doctor and Department for each doctor",
      "No navigation properties"
    ],
    "answer": 1,
    "why": "It contains Include(x => x.Device).Include(x => x.Doctors)."
  },
  {
    "id": "M09",
    "type": "mcq",
    "topic": "EF Core loading",
    "prompt": "Which expression in DoctorRepo.GetBYID loads the doctor’s department?",
    "options": [
      "FindAsync(id)",
      "Include(x => x.Department) with FirstOrDefaultAsync",
      "AsNoTracking() alone",
      "SaveChangesAsync()"
    ],
    "answer": 1,
    "why": "Include is used with a query operator."
  },
  {
    "id": "M10",
    "type": "mcq",
    "topic": "EF Core loading",
    "prompt": "What is a key difference between Generic<T>.GetBYID and DoctorRepo.GetBYID?",
    "options": [
      "Generic<T> deletes the entity",
      "Generic<T> uses FindAsync without eager-loading Department",
      "DoctorRepo cannot query by ID",
      "Generic<T> always disables tracking"
    ],
    "answer": 1,
    "why": "Generic<T> calls DbSet.FindAsync, whereas DoctorRepo includes Department."
  },
  {
    "id": "M11",
    "type": "mcq",
    "topic": "Entity relationships",
    "prompt": "How is Patient ↔ Doctor configured in PatientConfg?",
    "options": [
      "One-to-one",
      "One-to-many",
      "Many-to-many",
      "Owned entity"
    ],
    "answer": 2,
    "why": "HasMany(x => x.Doctors).WithMany(x => x.patients)."
  },
  {
    "id": "M12",
    "type": "mcq",
    "topic": "Entity relationships",
    "prompt": "Which property is the foreign key for Device → Patient?",
    "options": [
      "Patient.Id",
      "Doctor.DepartmentId",
      "Device.PatientId",
      "Patient.Email"
    ],
    "answer": 2,
    "why": "HasForeignKey<Device>(x => x.PatientId)."
  },
  {
    "id": "M13",
    "type": "mcq",
    "topic": "Entity relationships",
    "prompt": "What delete behavior is configured for Department → Doctor?",
    "options": [
      "Restrict",
      "SetNull",
      "ClientSetNull",
      "Cascade"
    ],
    "answer": 3,
    "why": "DepartmentConfg uses OnDelete(DeleteBehavior.Cascade)."
  },
  {
    "id": "M14",
    "type": "mcq",
    "topic": "Mapping",
    "prompt": "Which AutoMapper mapping is needed for GetDoctor to provide nested department information?",
    "options": [
      "Department → DepartmentInDoctor",
      "Department → AddPatientDTO",
      "Device → ReturnDoctorDTO",
      "Doctor → AddDoctorDTO only"
    ],
    "answer": 0,
    "why": "ProfileMapping defines Department to DepartmentInDoctor in addition to Doctor to ReturnDoctorDTO."
  },
  {
    "id": "M15",
    "type": "mcq",
    "topic": "Mapping",
    "prompt": "What does _mapper.Map<Patient>(addPatientDTO) primarily perform?",
    "options": [
      "Run a database migration",
      "Convert the input DTO into a Patient entity",
      "Return HTTP 200 automatically",
      "Validate foreign keys in SQL Server"
    ],
    "answer": 1,
    "why": "Mapping copies matched data; FK existence is explicitly checked in the controller."
  },
  {
    "id": "M16",
    "type": "mcq",
    "topic": "Null safety",
    "prompt": "In AddPatient, what can occur when DoctorsID is omitted or null?",
    "options": [
      "The foreach is automatically skipped",
      "A NullReferenceException occurs when iterating DoctorsID",
      "The controller returns 404 before looping",
      "EF Core adds an empty doctor automatically"
    ],
    "answer": 1,
    "why": "AddPatientDTO.DoctorsID is nullable but foreach operates without a null check."
  },
  {
    "id": "M17",
    "type": "mcq",
    "topic": "Update behavior",
    "prompt": "When updating a patient whose Device is null but the update DTO supplies a device, what does the controller do?",
    "options": [
      "Rejects the request",
      "Creates a new Device and assigns its Model",
      "Deletes the patient",
      "Always ignores supplied Device"
    ],
    "answer": 1,
    "why": "It initializes patientdata.Device = new Device() if needed."
  },
  {
    "id": "M18",
    "type": "mcq",
    "topic": "Update behavior",
    "prompt": "What is the intended effect of sending an empty non-null DoctorsID list in UpdatePatient?",
    "options": [
      "Keep all current doctors",
      "Clear the patient’s assigned doctors",
      "Add every doctor in the system",
      "Delete every doctor row"
    ],
    "answer": 1,
    "why": "The method clears the navigation collection before iterating an empty list."
  },
  {
    "id": "M19",
    "type": "mcq",
    "topic": "C# inheritance",
    "prompt": "What is significant about PatientRepo.GetBYID compared with Generic<Patient>.GetBYID?",
    "options": [
      "It is declared override and replaces virtual dispatch",
      "It is declared virtual rather than override, so it hides the inherited member",
      "It is static",
      "It returns a Department"
    ],
    "answer": 1,
    "why": "The derived method does not override the base virtual method, so calls through Generic<Patient> use the base implementation."
  },
  {
    "id": "M20",
    "type": "mcq",
    "topic": "Validation",
    "prompt": "Which validation is explicitly applied to AddDepartmentDTO.Name?",
    "options": [
      "[Required] and [MaxLength(50)]",
      "[Range(1,50)] only",
      "[EmailAddress]",
      "No validation attributes"
    ],
    "answer": 0,
    "why": "The project uses Required and MaxLength(50)."
  },
  {
    "id": "M21",
    "type": "mcq",
    "topic": "API documentation",
    "prompt": "When is the Swagger UI configured to run?",
    "options": [
      "In every environment",
      "Only in Development",
      "Only in Production",
      "Never"
    ],
    "answer": 1,
    "why": "UseSwagger and UseSwaggerUI are guarded by IsDevelopment()."
  },
  {
    "id": "M22",
    "type": "mcq",
    "topic": "API security",
    "prompt": "Which security observation is supported by Program.cs and its controllers?",
    "options": [
      "All endpoints require JWT",
      "AddAuthentication and authentication middleware are configured",
      "No authentication scheme is configured and no [Authorize] attributes appear in the inspected controllers",
      "Every endpoint uses role-based authorization"
    ],
    "answer": 2,
    "why": "The shown pipeline calls UseAuthorization but has no authentication setup nor endpoint authorization attributes."
  },
  {
    "id": "M23",
    "type": "mcq",
    "topic": "Repository pattern",
    "prompt": "What does Generic<T>.Update do?",
    "options": [
      "DbSet.Update(entity) followed by SaveChangesAsync",
      "Only changes the entity locally",
      "Deletes and recreates the database",
      "Only maps DTOs"
    ],
    "answer": 0,
    "why": "The implementation calls Update then saves changes."
  },
  {
    "id": "M24",
    "type": "mcq",
    "topic": "Request pipeline",
    "prompt": "Which middleware in Program.cs redirects HTTP requests toward HTTPS?",
    "options": [
      "app.UseHttpsRedirection()",
      "app.UseAuthorization()",
      "app.MapControllers()",
      "app.UseSwagger()"
    ],
    "answer": 0,
    "why": "HTTPS redirection middleware is configured."
  },
  {
    "id": "T01",
    "type": "tf",
    "topic": "Entity relationships",
    "prompt": "Device is optional from the Patient navigation property’s perspective in this model.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "Patient.Device is nullable."
  },
  {
    "id": "T02",
    "type": "tf",
    "topic": "Mapping",
    "prompt": "ProfileMapping includes a Device → DeviceinpatientDTO mapping.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "It is explicitly configured."
  },
  {
    "id": "T03",
    "type": "tf",
    "topic": "Repositories",
    "prompt": "Generic<T>.GetAll uses ToListAsync.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "Its implementation awaits DbSet.ToListAsync()."
  },
  {
    "id": "T04",
    "type": "tf",
    "topic": "Validation",
    "prompt": "AddDoctorDTO.Email has the [EmailAddress] attribute.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "It also has [Required]."
  },
  {
    "id": "T05",
    "type": "tf",
    "topic": "EF Core loading",
    "prompt": "DoctorRepo.GetBYID loads related patients with Include.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "why": "It includes Department, not patients."
  },
  {
    "id": "T06",
    "type": "tf",
    "topic": "Dependency injection",
    "prompt": "PatientRepo is registered as a scoped service in Program.cs.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "builder.Services.AddScoped<PatientRepo>()."
  },
  {
    "id": "T07",
    "type": "tf",
    "topic": "Entity relationships",
    "prompt": "A Doctor can be assigned to multiple Patients according to PatientConfg.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "The many-to-many relationship permits this."
  },
  {
    "id": "T08",
    "type": "tf",
    "topic": "Updates",
    "prompt": "Passing Device = null to UpdatePatient explicitly removes the existing Device.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "why": "The update logic skips device changes if the DTO.Device is null."
  },
  {
    "id": "T09",
    "type": "tf",
    "topic": "Repositories",
    "prompt": "PatientRepo.GetBYID uses the override keyword.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "why": "It is declared virtual; this is method hiding, not overriding."
  },
  {
    "id": "T10",
    "type": "tf",
    "topic": "API behavior",
    "prompt": "PatientController.GetPatients maps the entities to IEnumerable<ReturnPatientDTO>.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "The method maps the result from PatientRepo.GetAll to return DTOs."
  },
  {
    "id": "D01",
    "type": "debug",
    "topic": "Async/await",
    "prompt": "What is the problem with the modified department POST action?",
    "options": [
      "The database task is fire-and-forget; make the action async and await _repo.Add before returning",
      "Ok() can never be returned from a POST",
      "DTOs cannot be mapped to entities",
      "The repository must be a singleton"
    ],
    "answer": 0,
    "code": "[HttpPost]\npublic IActionResult Add(AddDepartmentDTO dto)\n{\n    _ = _Generic.Add(_mapper.Map<Department>(dto));\n    return Ok();\n}",
    "why": "Discarding the Add task lets the response return before persistence completes and may hide exceptions."
  },
  {
    "id": "D02",
    "type": "debug",
    "topic": "EF Core loading",
    "prompt": "A developer replaces DoctorRepo.GetBYID with the snippet below. Why is it wrong?",
    "options": [
      "FindAsync cannot be chained on an IQueryable from Include; use FirstOrDefaultAsync(d => d.Id == id)",
      "Include only works on Device",
      "Id must be a string",
      "Use SaveChangesAsync after every read"
    ],
    "answer": 0,
    "code": "return await _appDbContext.doctors\n    .Include(d => d.Department)\n    .FindAsync(id);",
    "why": "Include returns IQueryable, but FindAsync is a DbSet member."
  },
  {
    "id": "D03",
    "type": "debug",
    "topic": "Dependency injection",
    "prompt": "Select the correct fix for the modified registration.",
    "options": [
      "Register AppDbContext as transient",
      "Use AddScoped<PatientRepo>()",
      "Remove PatientRepo constructor injection",
      "Call SaveChangesAsync before registering"
    ],
    "answer": 1,
    "code": "builder.Services.AddSingleton<PatientRepo>();\n// PatientRepo requires AppDbContext (registered via AddDbContext)",
    "why": "A singleton must not hold a scoped DbContext."
  },
  {
    "id": "D04",
    "type": "debug",
    "topic": "Null safety",
    "prompt": "What is missing when the existing patient has no Device?",
    "options": [
      "Include Department",
      "Initialize patientdata.Device when it is null",
      "Call Remove(patientdata.Device)",
      "Change Model to int"
    ],
    "answer": 1,
    "code": "if (dto.Device != null)\n{\n    patientdata.Device.Model = dto.Device.Model;\n}",
    "why": "Without a new Device, accessing its Model throws NullReferenceException."
  },
  {
    "id": "D05",
    "type": "debug",
    "topic": "Update behavior",
    "prompt": "What bug appears in this modified doctor update loop?",
    "options": [
      "The collection is cleared on every iteration, so only the last doctor remains",
      "Too many calls to SaveChangesAsync",
      "It adds all doctors twice",
      "It automatically deletes Doctor rows"
    ],
    "answer": 0,
    "code": "foreach (int doctorId in dto.DoctorsID)\n{\n    patientdata.Doctors.Clear();\n    var doctor = await _doctorRepo.GetBYID(doctorId);\n    patientdata.Doctors.Add(doctor);\n}",
    "why": "Clear should happen once before the loop; validate each retrieved doctor."
  },
  {
    "id": "D06",
    "type": "debug",
    "topic": "EF Core mapping",
    "prompt": "Choose the correct FK mapping for Device (dependent) → Patient (principal).",
    "options": [
      "HasForeignKey<Device>(d => d.PatientId)",
      "HasForeignKey<Department>(x => x.Id)",
      "WithMany(p => p.Doctors)",
      "DeleteBehavior.SetNull only"
    ],
    "answer": 0,
    "code": "builder.HasOne(d => d.Patient)\n    .WithOne(p => p.Device)\n    .HasForeignKey<Patient>(p => p.Id);",
    "why": "The dependent is Device; its PatientId holds the FK."
  },
  {
    "id": "D07",
    "type": "debug",
    "topic": "Entity relationships",
    "prompt": "Fix this intentionally broken relationship configuration.",
    "options": [
      "Change Doctors to a one-to-one property",
      "Use .WithMany(d => d.patients) for the many-to-many relationship",
      "Drop the Doctor table",
      "Delete the Patient.Doctors collection"
    ],
    "answer": 1,
    "code": "builder.HasMany(p => p.Doctors)\n    .WithOne(d => d.Department);",
    "why": "Both sides are collections, so this should be HasMany().WithMany()."
  },
  {
    "id": "D08",
    "type": "debug",
    "topic": "AutoMapper",
    "prompt": "Which mapping restores the GET doctor response direction?",
    "options": [
      "CreateMap<Doctor, ReturnDoctorDTO>()",
      "CreateMap<Device, Doctor>()",
      "CreateMap<Patient, Department>()",
      "No mapping is needed in any configuration"
    ],
    "answer": 0,
    "code": "CreateMap<ReturnDoctorDTO, Doctor>();\n// Controller uses _mapper.Map<ReturnDoctorDTO>(doctor)",
    "why": "Direction matters; mapping from Doctor to ReturnDoctorDTO is required."
  },
  {
    "id": "D09",
    "type": "debug",
    "topic": "Persistence",
    "prompt": "What correction makes deletion persistent?",
    "options": [
      "Call await _db.SaveChangesAsync() before returning true",
      "Call AddAsync(item)",
      "Call ToListAsync on item",
      "Replace FindAsync with AsNoTracking"
    ],
    "answer": 0,
    "code": "var item = await _db.Set<T>().FindAsync(id);\nif (item == null) return false;\n_db.Set<T>().Remove(item);\nreturn true;",
    "why": "Remove marks the state; SaveChangesAsync writes to SQL Server."
  },
  {
    "id": "D10",
    "type": "debug",
    "topic": "Async/await",
    "prompt": "Why is this modified existence check incorrect?",
    "options": [
      "The method returns Task<Doctor?>; await it to get a Doctor before checking/adding",
      "NotFound is invalid inside controllers",
      "Use DoctorId.ToString()",
      "GetBYID returns multiple doctors"
    ],
    "answer": 0,
    "code": "var doctor = _doctorRepo.GetBYID(doctorId);\nif (doctor == null) return NotFound();\npatient.Doctors.Add(doctor);",
    "why": "Without await, doctor is a Task, not a Doctor entity."
  },
  {
    "id": "D11",
    "type": "debug",
    "topic": "EF Core loading",
    "prompt": "Which method fixes this regression in the patient GET all endpoint?",
    "options": [
      "Use Include(p => p.Device).Include(p => p.Doctors) before ToListAsync",
      "Use FindAsync for all patient records",
      "Remove async from the controller",
      "Call SaveChangesAsync to load navigation data"
    ],
    "answer": 0,
    "code": "public override async Task<IEnumerable<Patient>> GetAll()\n{\n    return await _appDbContext.patients.ToListAsync();\n}",
    "why": "The original eager-loads both related navigations."
  },
  {
    "id": "D12",
    "type": "debug",
    "topic": "Validation",
    "prompt": "How should the incorrect validation response be fixed?",
    "options": [
      "Return BadRequest(ModelState)",
      "Return NoContent()",
      "Throw new Exception()",
      "Ignore ModelState to optimize"
    ],
    "answer": 0,
    "code": "if (!ModelState.IsValid)\n    return Ok(ModelState);",
    "why": "Invalid model input should not yield a success status."
  },
  {
    "id": "D13",
    "type": "debug",
    "topic": "C# inheritance",
    "prompt": "The controller calls PatientRepo.GetBYID through IGeneric<Patient>. Why does it miss Device/Doctors?",
    "options": [
      "The method should be declared override, not virtual, to replace the inherited virtual method",
      "The method needs a static modifier",
      "ToListAsync must be used even for one patient",
      "Entity Framework forbids eager loading on a derived repository"
    ],
    "answer": 0,
    "code": "public class PatientRepo : Generic<Patient>\n{\n    public virtual async Task<Patient?> GetBYID(int id)\n        => await _appDbContext.patients.Include(p => p.Device)\n                             .Include(p => p.Doctors)\n                             .FirstOrDefaultAsync(p => p.Id == id);\n}",
    "why": "This recreates the actual inheritance issue in the submitted project; override is necessary for polymorphic dispatch."
  },
  {
    "id": "D14",
    "type": "debug",
    "topic": "Null safety",
    "prompt": "What protects the POST action when the DTO sends no doctor IDs?",
    "options": [
      "Use foreach (var doctorId in addPatientDTO.DoctorsID ?? new List<int>())",
      "Make DoctorsID a string",
      "Call SaveChangesAsync before the loop",
      "Replace foreach with while(true)"
    ],
    "answer": 0,
    "code": "foreach (var doctorId in addPatientDTO.DoctorsID)\n{\n    var doctor = await _doctorRepo.GetBYID(doctorId);\n    if (doctor == null) return NotFound();\n    patient.Doctors.Add(doctor);\n}",
    "why": "DoctorsID is nullable in AddPatientDTO; a null-coalescing fallback supports optional doctor IDs."
  }
];
// ADMIN CONFIGURATION: Paste the deployed Google Apps Script Web App /exec URL here.
// Keep only the three files in this folder public. Never paste Google credentials.
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxW-hmA122KgyhMo3NZQpv_8aMpaEIaX3QTXSeIQWbj635i2U53B0XnSVNz0An6IeFYKw/exec';
const STORAGE_KEY = 'final-api-session-exam-v1';
const TOTAL = QUESTIONS.length;
const ANSWER_LETTERS = ['A', 'B', 'C', 'D', 'E'];
const app = document.querySelector('#app');
const modalRoot = document.querySelector('#modal-layer');
let session = readSession();
let modalType = null;
let awayEpisode = false;
let returnTimer = null;

function configured() {
  return /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec(?:\?.*)?$/.test(WEBHOOK_URL.trim());
}
function escapeHtml(x) {
  return String(x ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function pad(v) { return String(v).padStart(2, '0'); }
function localTimestamp(d) {
  const off = -d.getTimezoneOffset();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${String(d.getMilliseconds()).padStart(3, '0')}${off >= 0 ? '+' : '-'}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
}
function formatTime(iso) {
  return new Date(iso).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'medium' });
}
function uid() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  return 'id-' + Date.now() + '-' + Math.random().toString(36).slice(2);
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(session)); } catch (e) { console.warn('Local save unavailable', e); }
}
function readSession() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data && typeof data.id === 'string' && Array.isArray(data.answers)) {
      data.index = Math.max(0, Math.min(TOTAL - 1, Number(data.index) || 0));
      data.warnings = Math.max(0, Math.min(2, Number(data.warnings) || 0));
      return data;
    }
  } catch (e) { console.warn('Saved attempt unavailable', e); }
  return null;
}
function answeredCount() { return session.answers.filter(a => a !== null && a !== undefined).length; }
function scoreCount() { return QUESTIONS.reduce((score, q, i) => score + (session.answers[i] === q.answer ? 1 : 0), 0); }
function categoryName(q) { return { mcq: 'MULTIPLE CHOICE', tf: 'TRUE / FALSE', debug: 'ERROR CATCHING' }[q.type] || q.type; }
function render() {
  if (!session) renderLogin();
  else if (session.status !== 'active') renderResult();
  else renderExam();
  renderModal();
}
function renderLogin() {
  app.innerHTML = `<section class="hero">
    <div class="eyebrow">FINAL API SESSION / ASSESSMENT 01</div>
    <h1>Build the logic.<br><em>Prove the knowledge.</em></h1>
    <p class="intro">A project-specific assessment of ASP.NET Core Web API architecture, EF Core relationships, repository methods, controllers, and debugging.</p>
    <div class="info-grid">
      <div class="stat-card"><strong>${TOTAL}</strong><span>Technical questions</span></div>
      <div class="stat-card"><strong>3</strong><span>Assessment sections</span></div>
      <div class="stat-card"><strong>2</strong><span>Tab leaves = termination</span></div>
    </div>
    <div class="entry-grid">
      <div class="card"><h2>Student registration</h2><p>Your exact starting time is recorded when you select Begin exam.</p>
        <form id="login-form" autocomplete="on">
          <label class="field-label" for="student-name">Full name <span style="color:var(--red)">*</span></label>
          <input class="field" id="student-name" name="name" required maxlength="80" placeholder="e.g. Sarah Ahmed Mohamed" autocomplete="name">
          <label class="field-label" for="student-contact">Student email or ID <span style="color:var(--muted)">(optional)</span></label>
          <input class="field" id="student-contact" name="contact" maxlength="100" placeholder="Email address or student number" autocomplete="off">
          <button class="btn btn-primary full" style="margin-top:23px" type="submit">Begin exam <span aria-hidden="true">→</span></button>
        </form>
        <div class="help">One point per question. Unanswered questions are scored as zero. Progress is saved in this browser.</div>
        ${!configured() ? '<div class="setup-note"><b>Administrator setup required:</b> The Google Sheets webhook has not been configured. This version supports preview and local backup, but central submissions will not be collected.</div>' : ''}
      </div>
      <div class="card"><h3>Exam rules</h3><p>Please read before starting.</p>
        <div class="rule"><span class="rule-index">01</span><div><strong>Stay on the exam page</strong><span>Switching tabs, minimizing, or leaving for another application is tracked.</span></div></div>
        <div class="rule"><span class="rule-index">02</span><div><strong>One warning only</strong><span>Your first detected departure triggers a formal warning.</span></div></div>
        <div class="rule"><span class="rule-index">03</span><div><strong>Second departure = automatic submission</strong><span>The assessment ends, and only answers already saved are scored.</span></div></div>
        <div class="rule"><span class="rule-index">04</span><div><strong>Submit when finished</strong><span>You may skip and revisit questions. A backup XLSX download is available after submission.</span></div></div>
      </div>
    </div>
  </section>`;
}
function renderExam() {
  const i = session.index, q = QUESTIONS[i], answered = answeredCount(), pct = Math.round((answered / TOTAL) * 100);
  app.innerHTML = `<section class="examshell">
    <div class="examtop"><div><div class="eyebrow">LIVE ASSESSMENT / ${escapeHtml(session.name)}</div><h1>Final API Technical Exam</h1>
    <div class="exam-meta">Started <strong>${escapeHtml(formatTime(session.startedAt))}</strong> &nbsp;·&nbsp; Elapsed <strong id="elapsed">00:00:00</strong></div></div>
    <div class="pill ${session.warnings ? 'warn' : ''}">Focus warnings: ${session.warnings}/2</div></div>
    <div class="exam-main"><article class="card">
      <div class="question-head"><strong>${categoryName(q)}</strong><span>QUESTION ${pad(i + 1)} OF ${TOTAL} · ${escapeHtml(q.topic)}</span></div>
      <h2 class="question-prompt">${escapeHtml(q.prompt)}</h2>
      ${q.code ? `<pre class="code-snippet"><code>${escapeHtml(q.code)}</code></pre>` : ''}
      <fieldset class="options" style="border:0;padding:0;margin:0" aria-label="Answer options">
        ${q.options.map((option, j) => `<label class="option ${session.answers[i] === j ? 'selected' : ''}">
          <input type="radio" name="answer" value="${j}" ${session.answers[i] === j ? 'checked' : ''}>
          <span class="option-key">${ANSWER_LETTERS[j]}</span><span class="option-text">${escapeHtml(option)}</span></label>`).join('')}
      </fieldset>
      <div class="question-actions"><button class="btn btn-outline" data-action="clear" ${session.answers[i] === null ? 'disabled' : ''}>Clear answer</button>
        <div class="action-right"><button class="btn btn-outline" data-action="prev" ${i === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="btn btn-primary" data-action="next">${i === TOTAL - 1 ? 'Review answers' : 'Next question →'}</button></div></div>
    </article></div>
    <aside class="card side"><h3>Question navigator</h3><div class="side-kicker">Jump to any question.</div>
      <div class="side-progress"><span>Answered</span><b>${answered} / ${TOTAL}</b></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <nav class="question-grid" aria-label="Question navigation">${QUESTIONS.map((q, j) => `<button type="button" class="qdot ${session.answers[j] !== null ? 'answered' : ''} ${i === j ? 'current' : ''}" data-question="${j}" aria-label="Question ${j + 1}, ${session.answers[j] !== null ? 'answered' : 'unanswered'}" ${i === j ? 'aria-current="step"' : ''}>${j + 1}</button>`).join('')}</nav>
      <div class="legend"><span><i class="tiny-dot done"></i>Answered</span><span><i class="tiny-dot"></i>Unanswered</span></div>
      <div class="side-divider"></div>
      <div class="side-kicker">${TOTAL - answered} questions remaining. Submit at any time.</div>
      <button class="btn btn-primary full side-submit" data-action="submit-prompt">Submit assessment →</button>
      ${session.warnings ? `<div class="side-warning"><b>Warning ${session.warnings}/2.</b> Any further departure will terminate your exam.</div>` : ''}
    </aside>
  </section>`;
  updateElapsed();
}
function updateElapsed() {
  const el = document.querySelector('#elapsed');
  if (!el || !session || session.status !== 'active') return;
  const sec = Math.max(0, Math.floor((Date.now() - Date.parse(session.startedAt)) / 1000));
  el.textContent = `${pad(Math.floor(sec / 3600))}:${pad(Math.floor((sec % 3600) / 60))}:${pad(sec % 60)}`;
}
function resultPayload() { return session?.finalPayload || null; }
function renderResult() {
  const p = resultPayload();
  if (!p) { session = null; persist(); renderLogin(); return; }
  const terminated = session.status === 'terminated';
  const state = session.delivery || 'unconfigured';
  const info = {
    unconfigured: ['Reporting not configured', 'No Google Sheets endpoint is configured. Download the Excel backup.'],
    sending: ['Sending report…', 'The browser is attempting to deliver your results.'],
    attempted: ['Send attempted (not verified)', 'Google Apps Script does not provide a readable confirmation in this browser setup. Check the owner’s Google Sheet.'],
    failed: ['Delivery attempt failed', 'Your answers are saved locally. Use Retry reporting when your connection is available.']
  }[state] || ['Reporting state unknown', 'Download your local backup.'];
  app.innerHTML = `<section class="result-layout">
    <div class="result-hero"><div class="result-icon ${terminated ? 'danger' : ''}">${terminated ? '!' : '✓'}</div>
      <div class="eyebrow">${terminated ? 'AUTOMATIC TERMINATION' : 'ASSESSMENT SUBMITTED'}</div>
      <h1>${terminated ? 'Exam terminated' : 'Submission complete'}</h1>
      <p>${terminated ? 'The second page departure ended this assessment. Only previously recorded answers have been scored.' : 'Your responses have been recorded. The score below reflects your submitted answers.'}</p></div>
    <div class="scoreboard"><div class="score-cell"><strong>${p.score}/${p.totalQuestions}</strong><small>Correct answers</small></div>
      <div class="score-cell"><strong>${p.percentage}%</strong><small>Final score</small></div>
      <div class="score-cell"><strong>${p.answeredCount}/${p.totalQuestions}</strong><small>Questions answered</small></div>
      <div class="score-cell"><strong>${p.warnings}/2</strong><small>Focus violations</small></div></div>
    <section class="card"><div class="eyebrow">SUBMISSION RECORD</div><h2 style="margin-top:7px">${escapeHtml(p.studentName)}</h2>
      <div class="report-grid">
        <div><small>Exam status</small><b>${escapeHtml(p.examStatus)}</b></div>
        <div><small>Submission ID</small><b>${escapeHtml(p.submissionId)}</b></div>
        <div><small>Start date & time</small><b>${escapeHtml(p.startLocal)}</b></div>
        <div><small>Submission date & time</small><b>${escapeHtml(p.submittedLocal)}</b></div>
      </div>
      <div class="transmit ${state === 'failed' || state === 'unconfigured' ? 'error' : ''}" role="status"><strong>${escapeHtml(info[0])}</strong>${escapeHtml(info[1])}</div>
      <div class="result-actions"><button class="btn btn-primary" data-action="download">↓ Download Excel backup</button>
        ${configured() ? '<button class="btn btn-outline" data-action="retry">↻ Retry reporting</button>' : ''}
        <button class="btn btn-outline" data-action="new-student">New student / attempt</button></div>
    </section>
    <p class="help" style="text-align:center">Official reporting should be verified in the owner’s Google Sheet. Browser reports are not proof of secure proctoring.</p>
  </section>`;
}
function renderModal() {
  if (!modalType) { modalRoot.innerHTML = ''; return; }
  let content = '';
  if (modalType === 'warning') content = `<div class="modal-mark">!</div><h2>Warning 1/2</h2><p><strong>Leaving the exam tab is not allowed.</strong> If you leave again, your exam will be terminated and submitted automatically.</p><div class="modal-actions"><button class="btn btn-primary" data-action="ack-warning">I understand — continue exam</button></div>`;
  if (modalType === 'submit') content = `<div class="modal-mark">?</div><h2>Submit assessment?</h2><p>You have answered <strong>${answeredCount()} of ${TOTAL}</strong> questions. ${TOTAL - answeredCount()} unanswered question(s) will receive zero points. After submission, answers cannot be edited.</p><div class="modal-actions"><button class="btn btn-outline" data-action="close-modal">Continue exam</button><button class="btn btn-primary" data-action="confirm-submit">Submit now</button></div>`;
  if (modalType === 'new-student') content = `<div class="modal-mark">?</div><h2>Start a new attempt?</h2><p>The previous attempt remains submitted, but its saved browser copy will be replaced. Download the Excel backup first if needed.</p><div class="modal-actions"><button class="btn btn-outline" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="confirm-new">New attempt</button></div>`;
  modalRoot.innerHTML = `<div class="modal-backdrop"><section class="modal" role="alertdialog" aria-modal="true" aria-label="Exam confirmation">${content}</section></div>`;
  const el = modalRoot.querySelector('button'); if (el) el.focus({ preventScroll: true });
}
function goTo(index) { session.index = Math.max(0, Math.min(TOTAL - 1, index)); persist(); renderExam(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function getResponses() {
  return QUESTIONS.map((q, i) => {
    const selectedIndex = session.answers[i];
    return {
      questionId: q.id, type: q.type, topic: q.topic, question: q.prompt, selectedIndex,
      selectedText: selectedIndex === null ? '' : q.options[selectedIndex],
      correctIndex: q.answer, correctText: q.options[q.answer],
      isCorrect: selectedIndex === q.answer, answered: selectedIndex !== null
    };
  });
}
function finalize(reason, fromPageExit = false) {
  if (!session || session.status !== 'active') return;
  session.status = reason === 'terminated' ? 'terminated' : 'completed';
  session.submittedAt = new Date().toISOString();
  const details = getResponses(), score = scoreCount();
  session.finalPayload = {
    submissionId: session.id, studentName: session.name, studentContact: session.contact,
    startedAt: session.startedAt, submittedAt: session.submittedAt,
    startLocal: localTimestamp(new Date(session.startedAt)),
    submittedLocal: localTimestamp(new Date(session.submittedAt)),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
    score, totalQuestions: TOTAL, percentage: Math.round(score / TOTAL * 10000) / 100,
    answeredCount: answeredCount(), warnings: session.warnings,
    examStatus: reason === 'terminated' ? 'Terminated due to Tab Switching' : 'Completed Normally',
    submissionStatus: reason === 'terminated' ? 'Terminated (Left Page Twice)' : 'Submitted',
    details,
    userAgent: navigator.userAgent.slice(0, 240)
  };
  modalType = null; session.delivery = configured() ? 'sending' : 'unconfigured'; persist();
  if (fromPageExit && configured()) {
    // Best-effort unload transmission. The retry button and de-duplication remain important.
    try { navigator.sendBeacon(WEBHOOK_URL, new Blob([JSON.stringify(session.finalPayload)], { type: 'text/plain;charset=utf-8' })); } catch (e) { }
  }
  sendReport(fromPageExit);
  if (!fromPageExit) render();
}
async function sendReport(fromPageExit = false) {
  if (!session || !session.finalPayload || !configured()) return;
  const submissionId = session.id;
  session.delivery = 'sending'; persist();
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST', mode: 'no-cors', credentials: 'omit', redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(session.finalPayload), keepalive: true
    });
    if (session?.id === submissionId) { session.delivery = 'attempted'; persist(); if (!fromPageExit) renderResult(); }
  } catch (e) {
    console.error('Report attempt failed', e);
    if (session?.id === submissionId) { session.delivery = 'failed'; persist(); if (!fromPageExit) renderResult(); }
  }
}
function safeExcelCell(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  return /^[\s\u0000-\u001f]*[=+@\-]/.test(s) ? "'" + s : s;
}
function downloadExcel() {
  if (!session?.finalPayload) return;
  const p = session.finalPayload;
  const summary = [
    ['Submission ID', p.submissionId], ['Student Name', safeExcelCell(p.studentName)], ['Email / ID', safeExcelCell(p.studentContact)],
    ['Started (UTC)', p.startedAt], ['Started (local, offset)', p.startLocal],
    ['Submitted (UTC)', p.submittedAt], ['Submitted (local, offset)', p.submittedLocal], ['Time zone', p.timezone],
    ['Score', p.score], ['Total Questions', p.totalQuestions], ['Percentage', p.percentage],
    ['Answered', p.answeredCount], ['Tab warnings', p.warnings], ['Exam status', p.examStatus],
    ['Submission status', p.submissionStatus]
  ];
  const rows = p.details.map(x => ({
    Question_ID: x.questionId, Section: x.type, Topic: x.topic, Question: safeExcelCell(x.question),
    Selected: safeExcelCell(x.selectedText || '(Unanswered)'), Correct: safeExcelCell(x.correctText), Correct_Answer: x.isCorrect ? 'Yes' : 'No'
  }));
  const filename = `FinalAPI_${p.submissionId.slice(0, 8)}.xlsx`;
  if (window.XLSX) {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.aoa_to_sheet(summary); ws1['!cols'] = [{ wch: 28 }, { wch: 66 }];
    const ws2 = XLSX.utils.json_to_sheet(rows); ws2['!cols'] = [{ wch: 16 }, { wch: 12 }, { wch: 23 }, { wch: 75 }, { wch: 65 }, { wch: 65 }, { wch: 16 }];
    XLSX.utils.book_append_sheet(wb, ws1, 'Summary'); XLSX.utils.book_append_sheet(wb, ws2, 'Answers');
    XLSX.writeFile(wb, filename); return;
  }
  // Excel-readable fallback if CDN is unreachable (CSV, not a falsely labeled XLSX).
  const csv = [['Question ID', 'Section', 'Topic', 'Question', 'Selected', 'Correct', 'Correct Answer?'],
  ...rows.map(r => Object.values(r))].map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a'); a.href = url; a.download = filename.replace('.xlsx', '.csv');
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  alert('SheetJS is not available. A CSV backup was downloaded instead.');
}
function flagDeparture(pageExit = false) {
  if (!session || session.status !== 'active' || awayEpisode) return;
  awayEpisode = true;
  session.warnings = Math.min(2, session.warnings + 1);
  if (session.warnings === 1) {
    session.needsWarning = true; persist();
    modalType = 'warning';
    if (!pageExit) renderModal();
  } else {
    finalize('terminated', pageExit);
  }
}
function maybeReturn() {
  if (returnTimer) clearTimeout(returnTimer);
  returnTimer = setTimeout(() => {
    if (document.visibilityState === 'visible' && document.hasFocus()) {
      awayEpisode = false;
      if (session?.status === 'active' && session.needsWarning) { modalType = 'warning'; renderModal(); }
    }
  }, 300);
}
// The two events are one departure, not two: awayEpisode collapses blur + hidden.
document.addEventListener('visibilitychange', () => document.hidden ? flagDeparture() : maybeReturn());
window.addEventListener('blur', () => flagDeparture());
window.addEventListener('focus', maybeReturn);
window.addEventListener('pagehide', () => flagDeparture(true));
window.addEventListener('online', () => {
  if (session?.status !== 'active' && session?.delivery === 'failed') sendReport();
});
window.addEventListener('storage', e => {
  if (e.key === STORAGE_KEY && session?.status === 'active') {
    // Another tab may have terminated the same local attempt. Reload synchronized state.
    const newer = readSession(); if (newer?.id === session.id && newer.status !== 'active') {
      session = newer; modalType = null; render();
    }
  }
});
document.addEventListener('submit', e => {
  if (e.target.id !== 'login-form') return;
  e.preventDefault();
  const name = document.querySelector('#student-name').value.trim().replace(/\s+/g, ' ');
  const contact = document.querySelector('#student-contact').value.trim();
  if (name.split(' ').length < 2) { document.querySelector('#student-name').setCustomValidity('Enter your full name (at least two words).'); document.querySelector('#student-name').reportValidity(); return; }
  document.querySelector('#student-name').setCustomValidity('');
  session = { id: uid(), name, contact, startedAt: new Date().toISOString(), answers: Array(TOTAL).fill(null), index: 0, warnings: 0, status: 'active', needsWarning: false, delivery: null };
  awayEpisode = false; modalType = null; persist(); render(); window.scrollTo(0, 0);
});
document.addEventListener('input', e => { if (e.target.id === 'student-name') e.target.setCustomValidity(''); });
document.addEventListener('change', e => {
  if (e.target.name === 'answer' && session?.status === 'active') {
    const n = Number(e.target.value);
    if (Number.isInteger(n) && n >= 0 && n < QUESTIONS[session.index].options.length) {
      session.answers[session.index] = n; persist(); renderExam();
    }
  }
});
document.addEventListener('click', e => {
  const target = e.target.closest('[data-action],[data-question]');
  if (!target) return;
  if (target.hasAttribute('data-question')) {
    if (session?.status === 'active' && !modalType) goTo(Number(target.dataset.question)); return;
  }
  const action = target.dataset.action;
  if (action === 'ack-warning') { modalType = null; if (session) { session.needsWarning = false; persist(); } renderModal(); }
  else if (action === 'close-modal') { modalType = null; renderModal(); }
  else if (action === 'submit-prompt' && session?.status === 'active') { modalType = 'submit'; renderModal(); }
  else if (action === 'confirm-submit') finalize('completed');
  else if (action === 'prev' && session?.status === 'active') goTo(session.index - 1);
  else if (action === 'next' && session?.status === 'active') goTo(session.index + 1 >= TOTAL ? 0 : session.index + 1);
  else if (action === 'clear' && session?.status === 'active') { session.answers[session.index] = null; persist(); renderExam(); }
  else if (action === 'download') downloadExcel();
  else if (action === 'retry' && session?.status !== 'active') sendReport();
  else if (action === 'new-student') { modalType = 'new-student'; renderModal(); }
  else if (action === 'confirm-new') { session = null; awayEpisode = false; modalType = null; try { localStorage.removeItem(STORAGE_KEY); } catch (e) { } render(); window.scrollTo(0, 0); }
});
setInterval(updateElapsed, 1000);
if (session?.status === 'active' && session.needsWarning) modalType = 'warning';
render();
