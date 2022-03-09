using Examples.Charge.Domain.Aggregates.PersonAggregate;
using Examples.Charge.Domain.Aggregates.PersonAggregate.Interfaces;
using Examples.Charge.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examples.Charge.Infra.Data.Repositories
{
    public class PersonRepository : IPersonRepository
    {
        private readonly ExampleContext _context;

        public PersonRepository(ExampleContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<Person>> FindAllAsync() => await Task.Run(() => _context.Person);

        public Person Get(int id)
        {
            return _context.Person.FirstOrDefault(e => e.BusinessEntityID == id);
        }
    }
}
